import { createContext, useEffect, useState } from "react";

export let BasketContext = createContext({
    BasketData: [],
    setBasketData: () => {},
    BasketGetData: () => {},
    AddCount: () => {},
    RemoveCount: () => {},
    RemoveCart: () => {},
    ProductPrice: 0,
});

export let BasketProvider = ({ children }) => {
    let [BasketData, setBasketData] = useState(() => {
        if (typeof window !== 'undefined') {
            let savedBasket = localStorage.getItem('basket');
            return savedBasket ? JSON.parse(savedBasket) : [];
        }
        return [];
    });

    let BasketGetData = (data) => {
        // Agar mahsulot basketda mavjud bo'lmasa, yangi qo'shish
        let existingProduct = BasketData.find(idProduct => idProduct.id === data.id);
        if (!existingProduct) {
            setBasketData([{ count: 1, ...data }, ...BasketData]);
        } else {
            // Agar mavjud bo'lsa, mavjud mahsulotni yangilash
            AddCount(data);
        }
    };

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(BasketData));
    }, [BasketData]);

    let AddCount = (ADD) => {
        let itemBasket = [...BasketData];
        let FindID = itemBasket.find((item) => item.id === ADD.id);

        if (FindID) {
            FindID.count += 1;
            setBasketData([...itemBasket]);
        }
    };

    let RemoveCount = (ADD) => {
        let itemBasket = [...BasketData];
        let FindID = itemBasket.find((item) => item.id === ADD.id);

        if (FindID) {
            if (FindID.count > 1) {
                FindID.count -= 1;
                setBasketData([...itemBasket]);
            } else {
                RemoveCart(FindID);
            }
        }
    };

    let RemoveCart = (data) => {
        try {
            let itemBasket = BasketData.filter((item) => item.id !== data.id);

            if (BasketData.length !== itemBasket.length) {
                setBasketData(itemBasket);
            } else {
                console.log('Element topilmadi yoki o‘chirilmadi');
            }
        } catch (error) {
            console.log('Xatolik yuz berdi:', error);
        }
    };

    let [ProductPrice, setProductPrice] = useState(0); // 0 boshlang'ich qiymat

    useEffect(() => {
        let Stoorage = BasketData; // BasketData dan foydalanish

        let AllProductPrice = Stoorage.reduce((a, b) => a + (Number(b.count || 0) * Number(b.price || 0)), 0);
        setProductPrice(AllProductPrice);
    }, [BasketData]);

    return (
        <BasketContext.Provider value={{ BasketData, setBasketData, BasketGetData, AddCount, RemoveCount, RemoveCart, ProductPrice }}>
            {children}
        </BasketContext.Provider>
    );
};

const product = [{
        id: 1,
        name: "Pencil",
        price: 5
    },
    {
        id: 2,
        name: "NoteBook",
        price: 10
    },
    {
        id: 3,
        name: "Eraser",
        price: 2
    },
    {
        id: 4,
        name: "PencilSharpener",
        price: 7
    }
];
console.log("some : ",product.some((products)=>products.price <= 5));


//Some methodu kullanımı ;

// Dizide en az 1 elemanın girilen koşulu sağlayığ sağlamadığıyla ilgili true ve ya false döndürür. 
//Dizide bu koşulu sağlayan elaman bulunuyorsa bize true döndürür.
//Bulunmuyorsa false döndürür.

//kullanımı şu şekilde oluşturdugumuz arayı alıyoruz some  methodunu ile arrow funcktion kullanıyoruz.Parametremizi girdikten sonra Bu durumda içeride aynı şekilde return ile bir koşul gösteriyoruz .
 //Tek koşul oldugu için tek satırdada yazabiliriz.
//console.log içine alarak yazdıralım ve sonucu görelim. 
export const productos = [
    {
      id: 1,
      nombre: "Marchiori & Barraud Hornero",
      precio: 21300,
      imagen:"https://vinotecaligier.com/media/catalog/product/cache/98d3e2af1d4ebc2ba18bbd79978e0c99/b/e/be75298_base.jpg",
      categoria:"Blend"
    },
    {
      id: 2,
      nombre: "Los Cardones Flor De Cardón",
      precio: 7100,
      imagen:"https://vinotecaligier.com/media/catalog/product/cache/73269a27812eefec516431430aa0b457/b/e/be75222_khocpfnfxvrkycip.jpg",
      categoria:"Cabernet"
    },
    {
      id: 3,
      nombre: "Martir Chardonnay",
      precio: 15950,
      imagen:"https://vinotecaligier.com/media/catalog/product/cache/98d3e2af1d4ebc2ba18bbd79978e0c99/b/e/be75486_base_heny4rfkvbhk9ab3.jpg",
      categoria:"Chardonnay"
    },
    {
      id: 4,
      nombre: "Fede Malbec",
      precio: 68100,
      imagen:"https://vinotecaligier.com/media/catalog/product/cache/98d3e2af1d4ebc2ba18bbd79978e0c99/b/e/be75480_base_vjgrpjty1sc85xys.jpg",
      categoria:"Malbec"
    },
    {
      id: 5,
      nombre: "Rutini Colección Merlot",
      precio: 12090,
      imagen:"https://vinotecaligier.com/media/catalog/product/cache/98d3e2af1d4ebc2ba18bbd79978e0c99/b/e/be14533_base_1.jpg",
      categoria:"Merlot"
    },
    {
      id: 6,
      nombre: "D.v. Catena Syrah Syrah",
      precio: 11500,
      imagen:"https://vinotecaligier.com/media/catalog/product/cache/98d3e2af1d4ebc2ba18bbd79978e0c99/b/e/be03133_base.jpg",
      categoria:"Syrah"
    },
    {
      id: 7,  
      nombre: "Cadus Signature Series Criolla",
      precio: 16838,
      imagen:"https://vinotecaligier.com/media/catalog/product/cache/98d3e2af1d4ebc2ba18bbd79978e0c99/b/e/be71684_base.jpg",
      categoria:"Criolla"
    },
    {
      id: 8,
      nombre: "Lorenzo Losagrado Cabernet Franc",
      precio: 26300,
      imagen:"https://vinotecaligier.com/media/catalog/product/cache/98d3e2af1d4ebc2ba18bbd79978e0c99/b/e/be75482_base_fgfsmrrlqd7zhpc4.jpg",
      categoria:"Cabernet Franc"
    }
  ];
  

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));


// variabel
var jualMobil =
  // Properti dan Methode
  {
    iklan: function () //   cetak
    {
      document.write(`BU,Saya ${this.name}, jual mobil ${this.merek}, bekas. `);
    },
  };
// create dan menggunaka (object (this.))
var sell = Object.create(jualMobil);

sell.name = "Tompel";
sell.merek = "Avanza";
sell.iklan();

// selesai

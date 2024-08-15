export const getImageData = (imgSrc: any) => {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const contex = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "";

    img.onload = function () {
      const center = {
        x: img.width / 2,
        y: img.height / 2.5,
      };
      var diameter = img.width;
      canvas.width = diameter;
      canvas.height = diameter;
      contex?.clearRect(0, 0, diameter, diameter);
      contex?.save();
      contex?.beginPath();
      const radius = img.width / 2;
      contex?.arc(radius, radius, radius, 0, 2 * Math.PI); //画出圆
      contex?.clip(); //裁剪上面的圆形
      contex?.drawImage(
        img,
        center.x - radius,
        center.y - radius,
        diameter,
        diameter,
        0,
        0,
        diameter,
        diameter
      ); // 在刚刚裁剪的园上画图
      contex?.restore(); // 还原状态
      resolve(canvas.toDataURL("image/png", 1));
    };
    img.src = imgSrc;
  });
};

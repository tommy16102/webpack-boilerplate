module.exports = function (api) {
  api.cache(true); //한번만 실행

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead", //지원 브라우저 범위
        useBuiltIns: "usage", //import pollyfill
        corejs: 3, 
        modules: false, //false -> import, export
      },
    ],
  ];

  return {
    presets,
  };
};
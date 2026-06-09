/*
 * Fonte unica de modelos e tempos usados nas calculadoras.
 * Atualize este arquivo quando a base de tempos mudar.
 */
var MODELOS_DB = [
  { nome:"130G", tempo: 4.477 }, { nome: "ACQUA", tempo: 4.185 }, { nome: "ACQUA INF.", tempo: 4.184 }, { nome: "ADRENA", tempo: 5.657 }, { nome: "ADRENA 2", tempo: 5.449 },
  { nome: "AGORA", tempo: 5.441 }, { nome: "ATALHO", tempo: 6.788 },
  { nome: "ASFALTO", tempo: 6.056 }, { nome: "ATMOS", tempo: 5.148 }, { nome: "CHALLENGER 6", tempo: 8.244 }, { nome: "CIRCUITO", tempo: 7.241 }, { nome: "CITRUS 2", tempo: 4.884 },
  { nome: "CLIC", tempo: 2.382 }, { nome: "CLIMA", tempo: 4.511 }, { nome: "CORRE 4", tempo: 20.933 }, { nome: "CORRE 4 50 ANOS", tempo: 21.872 }, { nome: "CORRE 5", tempo: 14.056 },
  { nome: "CORRE GRAFENO 3", tempo: 17.986 }, { nome: "CORRE MAX", tempo: 10.434 }, { nome: "CORRE S", tempo: 10.932 }, { nome: "CORRE SUPRA 2", tempo: 21.261 }, { nome: "CORRE TRILHA 3", tempo: 11.970 },
  { nome: "CORRE TURBO", tempo: 13.228 }, { nome: "CORRE VENTO 3", tempo: 9.134 }, { nome: "DAY", tempo: 4.739 }, { nome: "EASY 2", tempo: 5.304 }, { nome: "ERA", tempo: 4.023 }, { nome: "ESSENTIAL 3", tempo: 4.608 },
  { nome: "INVERSE", tempo: 8.044 }, { nome: "LUMINA", tempo: 6.582 }, { nome: "LANCE", tempo: 5.241 }, { nome: "NEBLINA", tempo: 9.045 }, { nome: "NYX", tempo: 4.992 }, { nome: "ORBITA", tempo: 4.540 },
  { nome: "PIXEL INF.", tempo: 3.655 }, { nome: "PLAZA", tempo: 4.186 }, { nome: "PRIDE 4", tempo: 4.906 }, { nome: "PRIDE 4 INF.", tempo: 4.914 }, { nome: "PURPURA", tempo: 5.555 }, { nome: "PERCURSO", tempo: 6.836 },
  { nome: "QU4DRA 2", tempo: 9.409 }, { nome: "QU4DRA BR1", tempo: 13.324 }, { nome: "REFLECT", tempo: 6.354 }, { nome: "REVERSO 2", tempo: 8.748 }, { nome: "REVERSO 3", tempo: 10.328 },
  { nome: "RITMO", tempo: 7.959 }, { nome: "RUSH", tempo: 3.929 }, { nome: "SAGAZ", tempo: 5.757 }, { nome: "SONORO 3", tempo: 8.488 }, { nome: "SUBVERSE", tempo: 7.938 },
  { nome: "SUBVERSE 2", tempo: 7.906 }, { nome: "SWIFT 5", tempo: 4.607 }, { nome: "SWIFT 6", tempo: 5.895 }, { nome: "TREINO", tempo: 7.617 }, { nome: "TRIUNFO", tempo: 4.553 }, { nome: "VEST", tempo: 4.292 },
  { nome: "TRIUNFO 3", tempo: 4.553 }, { nome: "VIRTUOSE", tempo: 5.308 }, { nome: "VOA 2", tempo: 4.999 }, { nome: "VOA 3", tempo: 4.988 }, { nome: "VOLCAN 2", tempo: 4.531 }, { nome: "VOLTA", tempo: 7.641 },
  { nome: "VELOZ 4", tempo: 10.325 }, { nome: "VIBRA", tempo: 8.717 }, { nome: "WELLNESS", tempo: 4.576 },

  { nome: "ACTION 4", tempo: 8.756 }, { nome: "ATLANTIS 2", tempo: 7.793 }, { nome: "BASE ONE", tempo: 16.138 }, { nome: "BASE PRIME", tempo: 12.318 }, { nome: "BASE RIDE", tempo: 9.917 }, { nome: "CDS SPORT", tempo: 13.612 },
  { nome: "CREATION", tempo: 12.373 }, { nome: "COOL RIDE 4", tempo: 7.357 }, { nome: "COOL RIDE 4 JR.", tempo: 7.356 },
  { nome: "COOL RIDE 3", tempo: 12.342 }, { nome: "COOL RIDE 3 INF.", tempo: 12.343 }, { nome: "CREATION", tempo: 12.373 }, { nome: "DYNASTY 5", tempo: 9.129 }, { nome: "DYNASTY 7", tempo: 11.924 }, { nome: "DYNASTY 8", tempo: 6.483 },
  { nome: "EDO CROSS", tempo: 10.559 }, { nome: "ENDEAVOR 3", tempo: 7.748 }, { nome: "ENIGMA 2", tempo: 8.128 }, { nome: "ENIGMA 3", tempo: 7.240 }, { nome: "FALCON 5", tempo: 8.058 },
  { nome: "FRONTIER 15", tempo: 8.281 }, { nome: "GLOW 2", tempo: 7.722 }, { nome: "GLOW 3", tempo: 8.177 }, { nome: "GOYA", tempo: 5.764 }, { nome: "GOYA 2", tempo: 5.795 }, { nome: "GOYA 3", tempo: 6.335 },
  { nome: "HAWK 5", tempo: 6.187 }, { nome: "HAWK 6", tempo: 9.260 }, { nome: "INVICTUS 4", tempo: 10.660 }, { nome: "LEGEND 4", tempo: 9.827 }, { nome: "LEGEND 5", tempo: 8.986 }, { nome: "LIVELY", tempo: 5.365 },
  { nome: "MIRAI 7", tempo: 7.068 }, { nome: "MIRAI 8", tempo: 6.738 }, { nome: "NEO AURA", tempo: 8.321 }, { nome: "NEO AURA 2", tempo: 8.229 }, { nome: "NEO AURA KINT", tempo: 11.782 }, { nome: "NEO PRYSMA", tempo: 6.782 },
  { nome: "NEO VORTEX", tempo: 8.245 }, { nome: "ORACLE", tempo: 11.569 }, { nome: "REGENT AS", tempo: 4.754 }, { nome: "REGENT AS JUNIOR", tempo: 4.778 }, { nome: "REGENT IN", tempo: 4.755 }, { nome: "REGENT IN JR", tempo: 4.753 },
  { nome: "REGENT MD", tempo: 7.756 }, { nome: "SKYWAY", tempo: 6.779 }, { nome: "STRATOS 3", tempo: 6.578 }, { nome: "SUNRISE", tempo: 11.058 }, { nome: "VICTORY", tempo: 12.015 }, { nome: "VIRTUE", tempo: 5.935 },
  { nome: "VIRTUE 2", tempo: 6.508 }, { nome: "VITALITY 5", tempo: 6.726 }, { nome: "VITALITY 6", tempo: 6.700 }, { nome: "VITALITY 7", tempo: 6.901 }, { nome: "WAY 4", tempo: 7.346 }, { nome: "WAY 5", tempo: 5.933 },
  { nome: "ZEST 2", tempo: 7.649 }
];

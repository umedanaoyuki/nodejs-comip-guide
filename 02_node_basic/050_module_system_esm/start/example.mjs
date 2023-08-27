// const { plus } = require('./calc');
//ESmoduleを使用する場合はpackage.jsonへtypeを追加する or 拡張子を変更する
import {plus} from "./calc.mjs";

const result = plus(1, 2);
console.log(result);

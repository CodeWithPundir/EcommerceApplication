import { all } from "redux-saga/effects";
import MaincategorySagas from "./MaincategorySagas";

export default function* RootSagas(){
    yield all([
        MaincategorySagas
    ])
}
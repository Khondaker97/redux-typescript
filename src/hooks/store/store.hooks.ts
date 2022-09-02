import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootType, AppDispatch } from "../../state/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;

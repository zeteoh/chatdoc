import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]){
        /**2
     * Notes:
     * 1. twMerge or tailwind merge is a neat function that merges two classes.
     * For instance: merging px-2 and py-2 into p-22
     * 2. clsx is used to merge conflict such as `bg-green-500 bg-red-500`, in tailwindcss, green will
     * always be rendered first. clsx will work better 
     */
    return twMerge(clsx(inputs))
}
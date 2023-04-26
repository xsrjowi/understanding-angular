import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "canFly"
})
export class CanFlyPipe implements PipeTransform {
    transform(value: boolean): "Can fly" | "Can't fly" {
        return value 
            ? "Can fly" 
            : "Can't fly";
    }
}
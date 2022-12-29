export function Confirm(message:string){
  return function(
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ){
    const original = descriptor.value;
    descriptor.value = function(...args: any[]){
      if(window.confirm(message)){
        return original.apply(this, args)
      }
      return null;
    }
  }
}

export function generatingURL(length:number) {
    const symbols:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let url = ''
    for (let i = 0; i < length; i++) {
        url += symbols[Math.floor(Math.random() * symbols.length)]
      }
    return url
}
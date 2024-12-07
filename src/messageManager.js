import fs from "fs"
export class messageCollection{
    constructor(){
       this.messages = []
       this.ruta = "./src/messageList.json"
    }
    async addMessage(data){
        try {
            await this.getMessages()
            const newMessage = data
            this.messages.push(newMessage)
            await fs.promises.writeFile(this.ruta, JSON.stringify(this.messages))
        } catch (error) {
            console.log(error)
        }
    }
    async getMessages(){
        const mensajes = await fs.promises.readFile(this.ruta, "utf-8")
        const parsear = JSON.parse(mensajes)
        this.messages = parsear || []
    }
}
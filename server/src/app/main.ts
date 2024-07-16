import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser"
import UserRoutes from "../routes/user.routes";

export class App {
    private app: Application;
    constructor(private port?: string | number) {
        this.app = express()
        this.settings();
        // middleware;
        this.middleware();
        // routes
        this.Routes();
    }

    private middleware() {
        this.app.use(cors({
            origin: "colorcarpuertodelclient",
            credentials: true
        }))
        this.app.use(bodyParser.json())
    }

    private Routes(): void {
        // poner rutas aca GET,PUT,DELETE
        this.app.use('/api', UserRoutes)
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000)
    }
    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log(`server listen in ${this.app.get('port')}`)
    }
}
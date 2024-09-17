import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser"
import UserRoutes from "../routes/user.routes";
import SwaggerUI from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
import { options } from "../swagger/swagger.options";
import { errorHandler } from "../middleware/errors/error.handler";
export class App {
    private app: Application;
    constructor(private port?: string | number) {
        this.app = express()
        this.settings();
        // middleware;
        this.middleware();
        // routes
        this.Routes();
        // swagger
        this.Swagger();
    }

    private middleware() {
        this.app.use(cors({
            origin: "http://localhost:3000",
            credentials: true
        }))
        this.app.use(bodyParser.json())
    }

    private Routes(): void {
        this.app.use('/api', UserRoutes)
        this.app.use(errorHandler)
    }
    private Swagger() {
        const specs = swaggerJsDoc(options)
        this.app.use("/docs", SwaggerUI.serve, SwaggerUI.setup(specs))
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3001)
    }
    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log(`server listen in ${this.app.get('port')}`)
    }
}
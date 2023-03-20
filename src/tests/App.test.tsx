import React from "react"
import ReactDOM from "react-dom"
import {App, globalEventDistributor} from "../App"

let container

beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

global.fetch = jest.fn(async () => {
    return {
        async json() {
            return []
        },
    } as Response
})

const AppTestWrapper: any = (): React.ReactElement => {
    return <App />
}

describe("App", () => {
    test("should render <App/>", () => {
        const mockFn1 = jest.fn().mockImplementation(() => 42)
        const mockFn2 = jest.fn(() => 42)
        expect(mockFn1()).toBe(42)
        ReactDOM.render(<AppTestWrapper />, container)
    })
})

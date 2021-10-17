class Ant {
    constructor(board) {
        this.board = board
        this.x = 50
        this.y = 50
        this.direction = Ant.UP
    }

    static get UP() {
        return 1;
    }
    static get RIGHT() {
        return 2;
    }
    static get DOWN() {
        return 3;
    }
    static get LEFT() {
        return 4;
    }

    move = () => {
        if (this.board[this.x][this.y]) {
            this.goLeft()
        } else {
            this.goRight()
        }
        this.board[this.x][this.y] = !this.board[this.x][this.y]
    }

    goLeft = () => {
        if (this.direction === Ant.UP) {
            this.x--
            this.direction = Ant.LEFT
        } else if (this.direction === Ant.RIGHT) {
            this.y--
            this.direction = Ant.UP
        } else if (this.direction === Ant.DOWN) {
            this.x++
            this.direction = Ant.RIGHT
        } else if (this.direction === Ant.LEFT) {
            this.y++
            this.direction = Ant.DOWN
        } else {
            console.log("Unexpected direction: " + this.direction)
        }
    }

    goRight = () => {
        if (this.direction === Ant.UP) {
            this.x++
            this.direction = Ant.RIGHT
        } else if (this.direction === Ant.RIGHT) {
            this.y++
            this.direction = Ant.DOWN
        } else if (this.direction === Ant.DOWN) {
            this.x--
            this.direction = Ant.LEFT
        } else if (this.direction === Ant.LEFT) {
            this.y--
            this.direction = Ant.UP
        } else {
            console.log("Unexpected direction: " + this.direction)
        }
    }
}

export default Ant;
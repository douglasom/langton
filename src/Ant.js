class Ant {
    constructor(props) {
        this.board = props.board
        this.x = 50
        this.y = 50
    }

    move = () => {
        this.x++
    }
}

export default Ant;
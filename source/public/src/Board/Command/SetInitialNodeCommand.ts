module jsflap.Board.Command {

    import IPoint = Point.IPoint;
    import NodeV = Visualization.NodeVisualization;
    import IGraph = Graph.IGraph;

    export class SetInitialNodeCommand implements ICommand {

        /**
         * The current board
         */
        private board: Board;

        /**
         * The current graph
         */
        private graph: IGraph;

        /**
         * The node being set to initial
         */
        private setInitialNode: Node;

        /**
         * The previous initial node
         */
        private prevInitialNode: Node;


        constructor(board: Board, setInitialNode: Node) {
            this.board = board;
            this.graph = board.graph;

            this.setInitialNode = setInitialNode;
            this.prevInitialNode = this.graph.getInitialNode();
        }

        execute(): void {
            this.graph.setInitialNode(this.setInitialNode);
            this.board.visualizations.update();
        }

        undo(): void {
            this.graph.setInitialNode(this.prevInitialNode);
            this.board.visualizations.update();
        }


    }
}
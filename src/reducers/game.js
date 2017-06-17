import { CHOOSE_SIDE, PLAYER_MOVE, CPU_MOVE } from '../actions/types';
import { drawInCell } from '../utils/drawing';
import { isWinning, findMoveRatings } from '../utils/game';

const INIT_STATE = {
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  tmpBoard: ['o', 0, 'x', 'x', 0, 0, 0, 'o', 0,],
  isMoving: 'player',
  playerSymbol: 'x',
};

const game = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHOOSE_SIDE:
      return {
        ...state,
        isMoving: action.payload.side === 'x' ? 'player' : 'cpu',
        playerSymbol: action.payload.side,
      };
    case PLAYER_MOVE:
      if (state.board[action.payload - 1] === 0) {
        const newBoard = [...state.board.slice(0, action.payload - 1),
          state.playerSymbol,
          ...state.board.slice(action.payload)];
        drawInCell(action.payload, state.playerSymbol);

        if (isWinning(newBoard, state.playerSymbol)) {
          console.log('player won!');
          return state;
        } else {
          return {
            ...state,
            board: newBoard,
            isMoving: 'cpu',
          };
        }
      }
      return state;
    case CPU_MOVE:
      const cpuSymbol = state.playerSymbol === 'x' ? 'o' : 'x';
      // console.log('player:', state.playerSymbol === 1 ? 'x' : 'o');
      // console.log('cpu:', cpuSymbol === 1 ? 'x' : 'o');
      // const moveRatings = findMoveRatings(state.board, cpuSymbol);
      const moveRatings = findMoveRatings(state.tmpBoard, 'x');
      console.log(moveRatings);
      if (isWinning(state.board, cpuSymbol)) {
        console.log('cpu won!');
        return state;
      } else {
        return {
          ...state,
          board: state.board,
          isMoving: 'player',
        };
      }
    default:
      return state;
  }
};

export default game;

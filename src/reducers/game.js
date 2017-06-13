import { CHOOSE_SIDE, PLAYER_MOVE, CPU_MOVE } from '../actions/types';
import { drawInCell } from '../utils/drawing';
import { checkForVictory, calculateCpuMove } from '../utils/game';

const INIT_STATE = {
  board: ['_','_','_','_','_','_','_','_','_',],
  isMoving: 'player',
  playerSymbol: 'x',
};

const game = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHOOSE_SIDE:
      return {
        ...state,
        playerCell: action.payload.side,
        isMoving: action.payload.side === 'x' ? 'player' : 'cpu',
      };
    case PLAYER_MOVE:
      if (state.board[action.payload - 1] === '_') {
        const newBoard = [...state.board.slice(0, action.payload - 1),
          state.playerSymbol,
          ...state.board.slice(action.payload)];
        drawInCell(action.payload, state.playerSymbol);

        if (checkForVictory(newBoard, state.playerSymbol)) {
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
      const newBoard = calculateCpuMove(state.board, state.playerSymbol);
      const cpuSymbol = state.playerSymbol === 'x' ? 'o' : 'x';

      if (checkForVictory(newBoard, cpuSymbol)) {
        console.log('cpu won!');
        return state;
      } else {
        return {
          ...state,
          board: newBoard,
          isMoving: 'player',
        };
      }
    default:
      return state;
  }
};

export default game;

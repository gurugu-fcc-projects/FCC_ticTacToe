import { CHOOSE_SIDE, PLAYER_MOVE, CPU_MOVE } from '../actions/types';
import { drawInCell } from '../utils/drawing';
import { drawWinningLine } from '../utils/finding';
import {
  isWinning,
  returnBestCell,
  whichCombination,
} from '../utils/game';

const INIT_STATE = {
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  tmpBoard: [
    'x', 0, 'o',
    'x', 0, 'o',
    0, 0, 0,
  ],
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
        const newBoard = [
          ...state.board.slice(0, action.payload - 1),
          state.playerSymbol,
          ...state.board.slice(action.payload)
        ];

        drawInCell(action.payload, state.playerSymbol);

        if (isWinning(newBoard, state.playerSymbol)) {
          const combination = whichCombination(newBoard, state.playerSymbol);
          drawWinningLine(combination);
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
      const cpuSymbol = state.playerSymbol === 'x' ? 'o' : 'x',
            bestCell = returnBestCell(state.board, cpuSymbol),
            newBoard = [
              ...state.board.slice(0, bestCell - 1),
              cpuSymbol,
              ...state.board.slice(bestCell)];

      drawInCell(bestCell, cpuSymbol);

      if (isWinning(newBoard, cpuSymbol)) {
        const combination = whichCombination(newBoard, cpuSymbol);
        drawWinningLine(combination);
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

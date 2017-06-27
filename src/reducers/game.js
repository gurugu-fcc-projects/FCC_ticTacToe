import {
  CHOOSE_SIDE,
  PLAYER_MOVE,
  CPU_MOVE,
  GAME_OVER,
  PREPARE_NEXT_GAME,
} from '../actions/types';
import {
  drawInCell,
  drawWinCells,
} from '../utils/drawing';
import {
  isWinning,
  returnBestCell,
} from '../utils/game';

const INIT_STATE = {
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  isMoving: 'player',
  playerSymbol: 'x',
  winLoss: 'none',
  gameOn: true,
  scoreWin: 0,
  scoreLoss: 0,
  scoreDraw: 0,
};

const game = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHOOSE_SIDE:
      return {
        ...state,
        isMoving: action.payload.isMoving ? 'player' : 'cpu',
        playerSymbol: action.payload.side,
      };
    case PLAYER_MOVE:

      if (state.board[action.payload - 1] === 0 && state.isMoving === 'player') {
        const newBoard = [...state.board.slice(0, action.payload - 1), state.playerSymbol, ...state.board.slice(action.payload)];

        drawInCell(action.payload, state.playerSymbol);

        if (isWinning(newBoard, state.playerSymbol)) {
          drawWinCells(newBoard, state.playerSymbol);
          return {
              ...state,
              isMoving: '',
              winLoss: 'win',
              scoreWin: state.scoreWin + 1,
          };
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
      if (state.board.indexOf(0) !== -1) {
        const cpuSymbol = state.playerSymbol === 'x' ? 'o' : 'x';
        let bestCell, newBoard;

        if (action.payload) {
          bestCell = Math.floor(Math.random() * (10 - 1)) + 1;
        } else {
          bestCell = returnBestCell(state.board, cpuSymbol);
        }

        newBoard = [...state.board.slice(0, bestCell - 1), cpuSymbol, ...state.board.slice(bestCell)];
        drawInCell(bestCell, cpuSymbol);

        if (isWinning(newBoard, cpuSymbol)) {
          drawWinCells(newBoard, cpuSymbol);
          return {
              ...state,
              board: newBoard,
              isMoving: '',
              winLoss: 'loss',
              scoreLoss: state.scoreLoss + 1,
          };
        } else if (newBoard.indexOf(0) !== -1) {
          return {
            ...state,
            board: newBoard,
            isMoving: 'player',
          };
        }
        return {
          ...state,
          isMoving: '',
          winLoss: 'draw',
          scoreDraw: state.scoreDraw + 1,
        }
      }
      return {
        ...state,
        isMoving: '',
        winLoss: 'draw',
        scoreDraw: state.scoreDraw + 1,
      };
    case GAME_OVER:
      return {
        ...state,
        winLoss: 'none',
        gameOn: false,
      };
    case PREPARE_NEXT_GAME:
      return {
        ...state,
        board: [0, 0, 0, 0, 0, 0, 0, 0, 0,],
        isMoving: state.playerSymbol === 'x' ? 'player' : 'cpu',
        winLoss: 'none',
        gameOn: true,
      };
    default:
      return state;
  }
};

export default game;

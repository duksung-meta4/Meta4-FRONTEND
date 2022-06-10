// import * as mm from "@magenta/music";

// // 동요 6곡 변수 선언
// var PIG;
// var music_rnn, rnnPlayer;
// createSampleSequences();
// setupMusicRNN();

// function createSampleSequences() {
//   // 동요 5곡 sequences

//   PIG = {
//     notes: [
//       { pitch: 69, startTime: 0.0, endTime: 0.5 },
//       { pitch: 69, startTime: 0.5, endTime: 1.0 },
//       { pitch: 69, startTime: 1.0, endTime: 1.5 },
//       { pitch: 69, startTime: 1.5, endTime: 2.0 },
//       { pitch: 69, startTime: 2.0, endTime: 3.0 },
//       { pitch: 71, startTime: 3.0, endTime: 3.5 },

//       { pitch: 69, startTime: 4.0, endTime: 5.0 },
//       { pitch: 67, startTime: 5.0, endTime: 6.0 },
//       { pitch: 66, startTime: 6.0, endTime: 7.0 },

//       { pitch: 67, startTime: 8.0, endTime: 8.5 },
//       { pitch: 67, startTime: 8.5, endTime: 9.0 },
//       { pitch: 67, startTime: 9.0, endTime: 9.5 },
//       { pitch: 69, startTime: 9.5, endTime: 10.0 },
//       { pitch: 67, startTime: 10.0, endTime: 10.5 },
//       { pitch: 66, startTime: 11.0, endTime: 11.5 },
//       { pitch: 64, startTime: 12.0, endTime: 14.0 },

//       { pitch: 69, startTime: 16.0, endTime: 16.5 },
//       { pitch: 69, startTime: 16.5, endTime: 17.0 },
//       { pitch: 69, startTime: 17.0, endTime: 17.5 },
//       { pitch: 69, startTime: 17.5, endTime: 18.0 },
//       { pitch: 69, startTime: 18.0, endTime: 19.0 },
//       { pitch: 71, startTime: 19.0, endTime: 19.5 },

//       { pitch: 69, startTime: 20.0, endTime: 21.0 },
//       { pitch: 67, startTime: 21.0, endTime: 22.0 },
//       { pitch: 66, startTime: 22.0, endTime: 23.0 },

//       { pitch: 64, startTime: 24.0, endTime: 24.5 },
//       { pitch: 64, startTime: 24.5, endTime: 25.0 },
//       { pitch: 64, startTime: 25.0, endTime: 25.5 },
//       { pitch: 67, startTime: 25.5, endTime: 26.0 },
//       { pitch: 66, startTime: 26.0, endTime: 26.5 },
//       { pitch: 64, startTime: 27.0, endTime: 27.5 },
//       { pitch: 62, startTime: 27.5, endTime: 29.5 },

//       { pitch: 69, startTime: 31.5, endTime: 32.0 },
//       { pitch: 69, startTime: 32.5, endTime: 33.0 },
//       { pitch: 57, startTime: 33.5, endTime: 34.0 },
//       { pitch: 57, startTime: 34.5, endTime: 35.0 },

//       { pitch: 69, startTime: 35.0, endTime: 35.5 },
//       { pitch: 69, startTime: 36.0, endTime: 36.5 },
//       { pitch: 57, startTime: 37.0, endTime: 37.5 },
//       { pitch: 57, startTime: 38.0, endTime: 38.5 },

//       { pitch: 69, startTime: 39.0, endTime: 39.5 },
//       { pitch: 69, startTime: 39.5, endTime: 40.0 },
//       { pitch: 69, startTime: 40.0, endTime: 40.5 },
//       { pitch: 69, startTime: 40.5, endTime: 41.0 },
//       { pitch: 57, startTime: 41.0, endTime: 41.5 },
//       { pitch: 57, startTime: 41.5, endTime: 42.0 },
//       { pitch: 57, startTime: 42.0, endTime: 42.5 },
//       { pitch: 57, startTime: 42.5, endTime: 43.0 },

//       { pitch: 69, startTime: 43.0, endTime: 43.5 },
//       { pitch: 69, startTime: 43.5, endTime: 44.0 },
//       { pitch: 69, startTime: 44.0, endTime: 44.5 },
//       { pitch: 69, startTime: 44.5, endTime: 45.0 },
//       { pitch: 69, startTime: 45.0, endTime: 45.5 },

//       { pitch: 69, startTime: 47.0, endTime: 47.5 },
//       { pitch: 69, startTime: 47.5, endTime: 48.0 },
//       { pitch: 69, startTime: 48.0, endTime: 48.5 },
//       { pitch: 69, startTime: 48.5, endTime: 49.0 },
//       { pitch: 69, startTime: 49.0, endTime: 50.0 },
//       { pitch: 71, startTime: 50.0, endTime: 50.5 },

//       { pitch: 69, startTime: 51.0, endTime: 52.0 },
//       { pitch: 67, startTime: 52.0, endTime: 53.0 },
//       { pitch: 66, startTime: 53.0, endTime: 54.0 },

//       { pitch: 67, startTime: 55.0, endTime: 55.5 },
//       { pitch: 67, startTime: 55.5, endTime: 56.0 },
//       { pitch: 67, startTime: 56.0, endTime: 56.5 },
//       { pitch: 69, startTime: 56.5, endTime: 57.0 },
//       { pitch: 67, startTime: 57.0, endTime: 57.5 },
//       { pitch: 66, startTime: 58.0, endTime: 58.5 },
//       { pitch: 64, startTime: 59.0, endTime: 61.0 },

//       { pitch: 69, startTime: 63.0, endTime: 63.5 },
//       { pitch: 69, startTime: 63.5, endTime: 64.0 },
//       { pitch: 69, startTime: 64.0, endTime: 64.5 },
//       { pitch: 69, startTime: 64.5, endTime: 65.0 },
//       { pitch: 69, startTime: 65.0, endTime: 66.0 },
//       { pitch: 71, startTime: 66.0, endTime: 66.5 },

//       { pitch: 69, startTime: 67.0, endTime: 68.0 },
//       { pitch: 67, startTime: 68.0, endTime: 69.0 },
//       { pitch: 66, startTime: 69.0, endTime: 70.0 },

//       { pitch: 64, startTime: 71.0, endTime: 71.5 },
//       { pitch: 64, startTime: 71.5, endTime: 72.0 },
//       { pitch: 64, startTime: 72.0, endTime: 72.5 },
//       { pitch: 67, startTime: 72.5, endTime: 73.0 },
//       { pitch: 66, startTime: 73.0, endTime: 73.5 },
//       { pitch: 64, startTime: 74.0, endTime: 74.5 },
//       { pitch: 62, startTime: 75.0, endTime: 77.0 },
//     ],
//     tempos: [
//       {
//         time: 0,
//         qpm: 100, // 노래 템포
//       },
//     ],
//     totalTime: 77,
//   };
// }

// // 생성할 곡의 길이
// var rnn_steps = 100; // How many steps to continue.

// // 작곡될 음들의 기존 입력값 연관도 (값이 높을수록 랜덤한 값 생성됨)
// var rnn_temperature = 1.3;

// // MusicRNN에 대한 셋팅 함수
// function setupMusicRNN() {
//   // Initialize model
//   music_rnn = new mm.MusicRNN(
//     "https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/melody_rnn"
//   );
//   music_rnn.initialize();

//   // Create a player to play the sampled sequence.  // 피아노 음으로 재생
//   rnnPlayer = new mm.SoundFontPlayer(
//     "https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus"
//   );
// }

// // 설정한 모델로 작곡하는 함수
// export function playRNN() {
//   // The model expects a quantized sequence, and ours was unquantized:
//   const qns = mm.sequences.quantizeNoteSequence(PIG, 4);

//   music_rnn
//     .continueSequence(qns, rnn_steps, rnn_temperature)
//     .then((sample) => rnnPlayer.start(sample));
// }

export default function(globalState) {
  const state = globalState.players;
  const getActivePlayers = () => state.activePlayers;
  const getcreatePlayersStatus = () => state.createPlayersStatus;
  return {
    getActivePlayers,
    getcreatePlayersStatus
  };
}

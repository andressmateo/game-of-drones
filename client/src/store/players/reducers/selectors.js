export default function(globalState) {
  const state = globalState.players;
  const getActivePlayers = () => state.activePlayers;
  const getCreatePlayersStatus = () => state.createPlayersStatus;
  return {
    getActivePlayers,
    getCreatePlayersStatus
  };
}

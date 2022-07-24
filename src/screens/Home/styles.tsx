import styled from '@emotion/native';

export const Container = styled.View`
  background-color: white;
  flex: 1;
  display: flex;
  padding: 16px;
`;

// export const Header = styled.View`
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 20px;
// `;

// export const HeaderIcon = styled.View`
//   padding: 10px;
//   display: flex;
//   justify-content: center;
// `;

// export const AppName = styled.Text`
//   color: black;
//   font-size: 54px;
//   font-weight: 700;
//   flex: 1;
// `;

export const SearchSection = styled.View`
  display: flex;
  margin-bottom: 20px;
`;

export const SearchLabel = styled.Text`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const SearchBox = styled.View`
  display: flex;
  border: 1px solid #ced4da;
  border-radius: 50px;
  overflow: hidden;
  flex-direction: row;
`;

export const SearchIcon = styled.View`
  padding: 10px 0 10px 10px;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.TextInput`
  padding: 10px 12px;
  flex: 1;
`;

export const PokemonCard = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  background-color: #94dbef;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-bottom: 12px;
`;

export const PokemonAvatar = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
`;

export const PokemonImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;
`;

export const PokemonDescription = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const PokemonID = styled.Text`
  color: white;
  font-weight: bold;
`;

export const PokemonName = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const PokemonTypeBox = styled.View`
  display: flex;
  flex-wrap: wrap;
`;

export const PokemonType = styled.View`
  background-color: rgba(52, 52, 52, 0.3);
  padding: 1px 8px;
  border-radius: 10px;
`;

export const PokemonTypeTitle = styled.Text`
  font-size: 12px;
  color: white;
  text-align: center;
`;

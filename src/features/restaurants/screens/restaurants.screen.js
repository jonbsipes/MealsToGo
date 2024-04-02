import React from "react";
import styled from "styled-components";
import { SafeAreaView, FlatList, StatusBar } from "react-native";
import SearchBar from "../../../components/SearchBar";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <SearchBar />
    </SearchContainer>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);

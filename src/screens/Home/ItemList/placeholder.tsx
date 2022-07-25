import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';

import { PokemonCard } from './styles';

function ItemListPlaceholder() {
  return (
    <PokemonCard>
      <ContentLoader
        speed={2}
        width="100%"
        height={84}
        viewBox="0 0 340 84"
        backgroundColor="#676666"
        foregroundColor="#ecebeb">
        <Rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
        <Rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
        <Rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
        <Rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
        <Rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
        <Rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
        <Rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
        <Rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
      </ContentLoader>
    </PokemonCard>
  );
}

export default ItemListPlaceholder;

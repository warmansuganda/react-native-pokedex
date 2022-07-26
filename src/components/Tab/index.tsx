import React, { useMemo, useState, ReactNode, useEffect } from 'react';
import { ScrollView, View } from 'react-native';

import TabItem, { TabItemProps } from './TabItem';
import { Title, TitleWrapper, ActiveIndicator, Content } from './styles';

interface Section {
  props: TabItemProps;
}

interface TabProps {
  children: Section | Section[];
}

function Tab({ children }: TabProps) {
  const [active, setActive] = useState<string>('about');

  const tabs = useMemo(() => {
    if (Array.isArray(children)) {
      return children;
    }
    return [children];
  }, [children]);

  const content = useMemo(() => {
    if (active) {
      const current = tabs.find(item => item.props.id === active);
      if (current) {
        return current as ReactNode; // cloneElement(current, {});
      }
    }

    return null;
  }, [tabs, active]);

  useEffect(() => {
    setActive(tabs[0].props.id);
  }, [tabs]);

  const handleChange = (id: string) => {
    setActive(id);
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {tabs.map(section => (
          <TitleWrapper
            key={section.props.id}
            activeOpacity={0.5}
            onPress={() => handleChange(section.props.id)}>
            <Title>{section.props.title}</Title>
            {active === section.props.id && <ActiveIndicator />}
          </TitleWrapper>
        ))}
      </ScrollView>
      <Content>{content}</Content>
    </View>
  );
}

export default Object.assign(Tab, { Item: TabItem });

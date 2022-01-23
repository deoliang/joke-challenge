import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tab1 from '../screens/Tab1';
import Tab2 from '../screens/Tab2';
const Tab = createBottomTabNavigator()

//defining the bottom tabs navigator whose children are the Tab 1 and Tab 2 screens
const TabNav = () => {
    return (
        <Tab.Navigator screenOptions={{

            tabBarLabelStyle: {
                fontWeight: "700",
                fontSize: 20,
                marginBottom: 10,
            },
            tabBarIconStyle: { display: 'none' },
            headerShown: false,
            tabBarActiveTintColor: '#906F8B',
            tabBarInactiveTintColor: '#B8AEC8',
            tabBarActiveBackgroundColor: '#EAEEFF'
        }}>
            <Tab.Screen options={{
                tabBarItemStyle: {
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderBottomWidth: 1,
                    borderRightWidth: 0.6
                }
            }
            } name="Tab 1" component={Tab1} />
            <Tab.Screen options={{
                tabBarItemStyle: {
                    borderTopWidth: 1,
                    borderLeftWidth: 0.6,
                    borderBottomWidth: 1,
                    borderRightWidth: 1
                }
            }
            } name="Tab 2" component={Tab2} />
        </Tab.Navigator>
    )
};

export default TabNav;

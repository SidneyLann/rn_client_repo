import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const features = [
    {
      id: 1,
      title: 'Dashboard',
      icon: 'grid-outline',
      color: '#FF6B6B',
    },
    {
      id: 2,
      title: 'Analytics',
      icon: 'stats-chart-outline',
      color: '#4ECDC4',
    },
    {
      id: 3,
      title: 'Messages',
      icon: 'chatbubble-outline',
      color: '#FFE66D',
    },
    {
      id: 4,
      title: 'Settings',
      icon: 'settings-outline',
      color: '#6B5B95',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'Project Update',
      description: 'You completed the design task',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'New Message',
      description: 'John sent you a message',
      time: '5 hours ago',
    },
    {
      id: 3,
      title: 'Payment Received',
      description: 'You received $250 for project',
      time: '1 day ago',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header with Gradient */}
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Hello, User!</Text>
            <Text style={styles.welcomeMessage}>Welcome to Cuberose</Text>
          </View>
      <TouchableOpacity 
        onPress={() => {
          // 确认注销
          Alert.alert(
            "确认注销",
            "您确定要退出登录吗？",
            [
              { text: "取消", style: "cancel" },
              { 
                text: "确定", 
                onPress: () => {
                  // 执行注销操作
                  navigation.navigate('Login');
                } 
              }
            ]
          );
        }}
        style={styles.logoutButton}
      >
        <Icon name="log-out-outline" size={24} color="#fff" />
      </TouchableOpacity>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: 'rgba(102, 126, 234, 0.2)' }]}>
              <Icon name="trending-up" size={24} color="#667eea" />
            </View>
            <Text style={styles.statValue}>$5,263</Text>
            <Text style={styles.statLabel}>Revenue</Text>
          </View>

          <View style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: 'rgba(118, 75, 162, 0.2)' }]}>
              <Icon name="people" size={24} color="#764ba2" />
            </View>
            <Text style={styles.statValue}>1,284</Text>
            <Text style={styles.statLabel}>Users</Text>
          </View>
        </View>

        {/* Features Grid */}
        <Text style={styles.sectionTitle}>Features</Text>
        <View style={styles.featuresGrid}>
          {features.map((feature) => (
            <TouchableOpacity key={feature.id} style={styles.featureCard}>
              <View style={[styles.featureIconContainer, { backgroundColor: feature.color }]}>
                <Icon name={feature.icon} size={24} color="#fff" />
              </View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activities */}
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <View style={styles.activitiesList}>
          {recentActivities.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityDescription}>{activity.description}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
              <View style={styles.activityIndicator} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcomeMessage: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    marginTop: 5,
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '48%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  activitiesList: {
    marginBottom: 30,
  },
  activityItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  activityTime: {
    fontSize: 12,
    color: '#999',
  },
  activityIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#667eea',
    marginLeft: 10,
    alignSelf: 'center',
  },
  headerButtons: {
  flexDirection: 'row',
  alignItems: 'center',
},
logoutButton: {
  marginRight: 15,
  padding: 5,
},
});

export default Home;
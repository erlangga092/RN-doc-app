import React from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { colors, fonts } from '../../../utils';

type NewsItemProps = {
    title: string;
    date: string;
    newsImage: ImageSourcePropType;
};

const NewsItem: React.FC<NewsItemProps> = ({ title, date, newsImage }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Image source={newsImage} style={styles.image} />
        </View>
    );
};

export default NewsItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingVertical: 16,
    },
    titleWrapper: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        marginBottom: 4,
        maxWidth: '90%',
    },
    date: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
    },
    image: {
        width: 80,
        height: 60,
        borderRadius: 11,
    },
});

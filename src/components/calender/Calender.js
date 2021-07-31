import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Agenda, Calendar } from 'react-native-calendars';


const Schedule = () => {
  const [items, setItems] = useState({});




  return (
    <View style={{ flex: 1 }}>
      
      <Text
                style={{
                    fontSize: 26,
                    fontFamily: 'Roboto',
                    textAlign: 'center',
                    padding: 5,
                    borderWidth: 1,
                    borderColor: 'white' ,
                    marginTop: 10,
                    marginBottom: 5,
                    backgroundColor: '#227BFF' ,
                    color: 'white' ,

                }}
            >
                Calender

            </Text>

      <Calendar
        // Initially visible month. Default = Date()
        current={'2021-07-17'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2021-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2025-12-01'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => { console.log('selected day', day) }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => { console.log('selected day', day) }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => { console.log('month changed', month) }}
        // Hide month navigation arrows. Default = false
       
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        // Replace default month and year title with custom one. the function receive a date as parameter
        
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        style={{ opacity: 1, color: 'grey' ,    }}
      />

    </View>
  );
};


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

export default Schedule;
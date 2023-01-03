#!/bin/bash
PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"
echo -e "\n~~~~~ MY SALON ~~~~~\n"

MAIN_MENU() {
  
  if [[ $1 ]]
  then
    echo -e "\n$1\n"
  else
    echo -e "Welcome to My Salon, please choose from the menu below.\n"
  fi
    
  SERVICES=$($PSQL "SELECT * FROM services")
  echo "$SERVICES" | while read SERVICE_ID BAR NAME
    do
      echo "$SERVICE_ID) $NAME"
    done

  echo "6)EXIT"

  read SERVICE_ID_SELECTED

  case $SERVICE_ID_SELECTED in
  1)SERVICE_MENU ;;
  2)SERVICE_MENU ;;
  3)SERVICE_MENU ;;
  4)SERVICE_MENU ;;
  5)SERVICE_MENU ;;
  6)EXIT ;;
  *) MAIN_MENU "I could not find that service. What would you like today?"
  esac
 }

SERVICE_MENU() {
  SERVICE_NAME=$($PSQL "SELECT name FROM services WHERE service_id=$SERVICE_ID_SELECTED")
  echo -e "\nWhat's your phone number?"
  read CUSTOMER_PHONE

  CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone='$CUSTOMER_PHONE'")

  if [[ -z $CUSTOMER_NAME ]]
    then
    echo -e "\nWhat's your name?"
    read CUSTOMER_NAME
    INSERT_CUSTOMER_DETAILS=$($PSQL "INSERT INTO customers (phone, name) VALUES('$CUSTOMER_PHONE', '$CUSTOMER_NAME')")
  fi
  
  CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$CUSTOMER_PHONE'")
  echo -e "\nWhen would you like to visit?"
  read SERVICE_TIME

  MAKE_APPOINTMENT=$($PSQL "INSERT INTO appointments(customer_id, service_id, time) VALUES($CUSTOMER_ID, $SERVICE_ID_SELECTED, '$SERVICE_TIME')")
  echo -e "\nI have put you down for a $SERVICE_NAME at $SERVICE_TIME, $CUSTOMER_NAME."
 }

EXIT() {
    echo -e "\nThank you for stopping in.\n"
  }

 MAIN_MENU
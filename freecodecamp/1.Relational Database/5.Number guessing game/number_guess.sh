#!/bin/bash
PSQL="psql -X --username=freecodecamp --dbname=number_guess --tuples-only -c"

SECRET_NUMBER=$(( 1 + RANDOM % 1000 ))
echo "$SECRET_NUMBER"
TOTAL_GUESSES=0
# Ask for username
MAIN_MENU() {
  if [[ $1 ]]
  then
   echo -e "\n$1\n"
  fi
  echo "Enter your username: "
  read USERNAME
  #if username is not entered
  if [[ -z $USERNAME ]]
  then
    MAIN_MENU "Please provide your username."
  fi
  LENGTH=${#USERNAME}
  #if username is greater than 22 characters
  if [[ "$LENGTH" -gt 22 ]]
  then
    MAIN_MENU "username cannot be greater than 22 characters."
  fi

  USER=$($PSQL "SELECT username FROM users WHERE username='$USERNAME'")
  if [[ -z $USER ]]
  then
    echo "Welcome, $USERNAME! It looks like this is your first time here."
  else
    USER_ID=$($PSQL "SELECT user_id FROM users WHERE username='$USERNAME'")
    GAMES_PLAYED=$($PSQL "SELECT COUNT(*) FROM games WHERE user_id=$USER_ID")
    BEST_GAME=$($PSQL "SELECT MIN(number_of_guesses) FROM games WHERE user_id=$USER_ID")
    echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
  fi 
  #Ask for a guess
  GUESS_NUMBER
}

GUESS_NUMBER(){
  if [[ $1 ]]
  then
    echo -e "\n$1"
  else
     echo -e "\nGuess the secret number between 1 and 1000: "
  fi
  read GUESS

  if ! [[ $GUESS =~ ^[0-9]+$ ]] 
  then
   GUESS_NUMBER "That is not an integer, guess again: "
  fi
  
  ((TOTAL_GUESSES++))

  if [ "$GUESS" -eq "$SECRET_NUMBER" ]
  then
    echo "You guessed it in $TOTAL_GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"
    INSERT_USER=$($PSQL "INSERT INTO users(username) VALUES('$USERNAME')")
    USER_ID=$($PSQL "SELECT user_id FROM users WHERE username='$USERNAME'")
    INSERT_GAME=$($PSQL "INSERT INTO games(user_id, number_of_guesses) VALUES($USER_ID, $TOTAL_GUESSES)")

  elif [ "$GUESS" -gt "$SECRET_NUMBER" ]
  then
    GUESS_NUMBER "It's lower than that, guess again: "

  else
    GUESS_NUMBER "It's higher than that, guess again: "
  fi
}

MAIN_MENU

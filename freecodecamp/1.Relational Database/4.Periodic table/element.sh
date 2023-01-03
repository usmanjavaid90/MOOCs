#!/bin/bash
PSQL="psql -X --username=freecodecamp --dbname=periodic_table --tuples-only -c"

if [[ $1 ]]
then
COLUMNS="atomic_number, name, symbol, type, atomic_mass, melting_point_celsius, boiling_point_celsius"
  #if atomic number is entered
  if [[ $1 =~ ^[0-9]+ ]]
  then
    ELEMENT_DATA=$($PSQL "SELECT $COLUMNS FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE atomic_number=$1") 
  #if symbol is entered
  else
    ELEMENT_DATA=$($PSQL "SELECT $COLUMNS FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE symbol='$1'") 
    #if name is entered
    if [[ -z $ELEMENT_DATA ]]
    then
      ELEMENT_DATA=$($PSQL "SELECT $COLUMNS FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE name='$1'")
    fi
  fi
  
  #if not found in the database
  if [[ -z $ELEMENT_DATA ]]
  then
    echo "I could not find that element in the database."
  else
  #read variables from selected data
    echo "$ELEMENT_DATA" | while IFS=" | " read ATOMIC_NUMBER NAME SYMBOL TYPE ATOMIC_MASS MELTING_POINT_CELSIUS BOILING_POINT_CELSIUS
    do
      #print output as per the required format
      echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING_POINT_CELSIUS celsius and a boiling point of $BOILING_POINT_CELSIUS celsius."
    done  
  fi

#if no argument is provided 
else
  echo "Please provide an element as an argument."
fi

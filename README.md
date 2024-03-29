# Getting Started with Create React App

Deploy production build to Github [Create React App](https://vitaliy-mazurenko.github.io/react-typescript/).

#

Arguments
From the user, you expect to receive numbers M, N, and X.

M range from 0 to 100

N range from 0 to 100

Limits for X must be calculated based on M and N values (details below)

#

Data
Create matrix M\*N, where M is the number of rows and N is the number of columns.

In each cell of the matrix should be an object with a structure

type CellId = number; // unique value for all table
type CellValue = number; // three digit random number

type Cell = {
id: CellId,
amount: CellValue
}

#

As a user I should be able to see all data in the table view
Show all generated data in the table with good UX.

Each cell contains the previously generated amount

Add an additional column to the table with values sum for each row

Add an additional row to the table with the average value for each column

#

As a user I should be able to increase the value in the cell
Increate the amount in the cell by 1 when user press on it. Recalculate average and sum values.

#

As a user I should be able to find the nearest by value cells
Highlight X cells where amount is closest to the amount of hovered cell.

#

Example
If X = 5 you should find in the matrix 5 cells with amount nearest to the value in the hovered cell and change background for those cells.

#

As a user I should be able to see the percent of each cell in a row
Replace amount in each cell in the row with the percent when user hover on the sum cell in this row.

Add a vertical gradient background inside the each cell in a row which will fill the calculated percentage of the cell value.

#

Example

1 > 16%

5 > 84%

6 (Hovered)

#

As a user I should be able to remove a row
Give the ability to remove any row in the table. Sum and average values should be recalculated respectively.

#

As a user I should be able to add a row
A new row should be appended at the end of the table, sum and average values should be recalculated respectively.

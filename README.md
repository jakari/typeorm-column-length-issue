# TypeORM Postgres column length issue

## Installation

1. Create a database and import `data.sql` into it.
2. Copy `ormconfig.sample.json` to `ormconfig.json` and modify to suit your needs.
3. Run `npm install`
4. Run application with `npm start`.
5. Examine the results from console output.

## The underlying issue

TypeORM creates column aliases when doing queries to the database. However with long column and table names, the aliases get so long that they get cutted in Postgres, since there is a 63 byte limit in column and table names. 

This same 63 byte name limit restriction applies to column aliases as well.

An example of the issue by doing a query to the test database in Postgres:

```
[typeorm_test=# SELECT "andHereWehaveAnTooLongEntityNameThatIsVeryDescriptive" AS "EntityWithVeryLongAndDescriptiveName_andHereWehaveAnTooLongEntityNameThatIsVeryDescriptive" FROM entity_with_very_long_and_descriptive_name;
NOTICE:  identifier "EntityWithVeryLongAndDescriptiveName_andHereWehaveAnTooLongEntityNameThatIsVeryDescriptive" will be truncated to "EntityWithVeryLongAndDescriptiveName_andHereWehaveAnTooLongEnti"
 EntityWithVeryLongAndDescriptiveName_andHereWehaveAnTooLongEnti
-----------------------------------------------------------------
                                                               1
(1 row)
```

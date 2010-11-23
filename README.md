# Mongo Helpers

I'm still in the process of factoring out all of the helper code we've used internally at Metamoki for Mongo console querying.  

For every helper lib I add, there will more thorough unittests that serve as usage examples.

# Libraries
## MongoDate

Handles converting a date to ObjectID.  This is useful for querying documents that were inserted before or after a certain timestamp.
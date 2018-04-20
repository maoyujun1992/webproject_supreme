var mongoose = require("mongoose");
var ItemSchema = require("./item.schema.server");
var Item = mongoose.model("Item", ItemSchema);

Item.createItem = createItem;
Item.findItemById = findItemById;
Item.deleteItem = deleteItem;
Item.updateItem = updateItem;
Item.findItemByCategory = findItemByCategory;
Item.findItemByName = findItemByName;
Item.findAll = findAll;
Item.findItemBySellerId = findItemBySellerId;
Item.findItemByBuyerId = findItemByBuyerId;
Item.findSellerListing = findSellerListing;


function findSellerListing(userId) {
  return Item.find({_seller: userId, _buyer: undefined});
}

function findAll() {
  return Item.find();
}

function findItemBySellerId(userId) {
  return Item.find({_seller: userId, _buyer: {$ne: null}});
}

function findItemByBuyerId(userId) {
  return Item.find({_buyer: userId});
}

function findItemByName(name) {
  return Item.find({'name': {'$regex': name}});
}

function findItemById(itemId) {
  return Item.findById({_id: itemId});
}

function findItemByCategory(category) {
  return Item.find({category: category});
}

function updateItem(itemId, item) {
  return Item
    .update({_id: itemId}, {
        $set: {
          name: item.name,
          color: item.color,
          price: item.price,
          url: item.url,
          category: item.category,
          size: item.size,
          _seller: item._seller,
          _buyer: item._buyer
        }
      }
    );
}


function deleteItem(itemId) {
  return Item.remove({_id: itemId});
}

function createItem(item) {
  return Item.create(item);
}

module.exports = Item;

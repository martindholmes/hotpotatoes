/*             HPItemBase.js              */
/*          Author: Martin Holmes.        */

/** This file is part of the HotPotatoes
  * project.
  *
  * Free to anyone for any purpose, but
  * acknowledgement would be appreciated.
  * The code is licensed under MPL.
  */

/** @class HPItemBase
  * @description This is the base abstract class from 
  *              which all question/item types derive.
  *              It provides a set of properties and
  *              methods expected to be implemented in 
  *              descendant classes. 
  */
class HPItemBase {
    constructor (itemType /*{string}*/){
        this.itemType = itemType;
    } 
/** @memberOf HPItemBase
  * @method readFromSource
  * @return {boolean} true if the read succeeded in populating
  *         the item; false if something went wrong.
  * @description The object populates itself by parsing the 
  *              contents of an HTML element.
  */
    readFromSource(source /* HTMLElement I think */){
        console.log('The readFromSource method needs to be implemented by a descendant class.')
    }
/** @memberOf HPItemBase
  * @method renderForView
  * @return {boolean} true if the write succeeded; false if 
  *         something went wrong.
  * @description The object serializes itself in XHTML into the target element.
  *              It uses a format that is appropriate for the end user (i.e. the
  *              student taking the exercise), and this is also the format used
  *              in a saved file.
  */
    renderForView(target /* HTMLElement I think */){
        console.log('The renderForView method needs to be implemented by a descendant class.')
    }
/** @memberOf HPItemBase
  * @method renderForEdit
  * @return {boolean} true if the write succeeded; false if 
  *         something went wrong.
  * @description The object serializes itself into a format which enables the quiz
  *              editor to configure and edit the content of the item.
  */
    renderForEditing(target /* HTMLElement I think */){
        console.log('The renderForEditing method needs to be implemented by a descendant class.')
    }
}
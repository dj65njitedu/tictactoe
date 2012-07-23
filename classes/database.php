<?php
class database {  

	protected $connection;
	public $collection;
	protected $cursor;
	protected $db;
	
function __construct()
{
$this->set_database('tttDB');
$this->set_collection('tttCollection');
}
	
	//makes a connection for mongo
	private function set_connection() {
		$this->connection = new mongo();
	}
	//calls the connection and sets the database;
	public function set_database($db) {
		$this->set_connection();
		$this->db = $this->connection->$db;	
	}
	
	
	//inserts a document
	public function insert_document($document) {
		$this->collection->insert($document);
	}
	//updates document(s)
	public function update_document($select, $data, $options = array("upsert" => true)) {
		$this->collection->update($select, array('$set' => $data), $options);
	}
	//delete document by id()
	public function remove_document_by_id($id, $options = array("justOne" => true)) {
	
		$query = $this->get_mongoID($id);
		
		
		$this->cursor = $this->collection->remove($query, $options);
	}
	//finds one document by id
	public function find_document_by_id($id) {
		$query = $this->get_mongoID($id);
		$this->cursor = $this->collection->findone($query);
	}
	
	//finds more than one document
	public function find_documents($query = null) {
		if($query == null) {
			$this->cursor = $this->collection->find();
		}
		else {
			$this->cursor = $this->collection->find($query);	
		}
		return $this->cursor;
	}
	
		//finds one document
	public function find_document($query = null) {
		if($query == null) {
			$this->cursor = $this->collection->findone();
		}
		else {
			$this->cursor = $this->collection->findone($query);	
		}
		return $this->cursor;
	}
	
	
	
	//sets the collection
	public function set_collection($collection) {
		$this->collection = $this->db->$collection;
	}
	//sets an index on a field to improve performance
	public function set_index($index) {
		$this->collection->ensureIndex($index);
	}
	
	public function get_cursor() {
		return $this->cursor;
	}
	
	public function drop_collection() {
		$this->collection->drop();
	}
	
	public function get_collections() {
		return $this->db->listCollections();
	}
	private function get_mongoID($id) {
		return array('_id' => new MongoId($id));
	}
	 
	public function return_array_from_collection()
	{
		$this->cursor = $this->collection->find();
		$results = iterator_to_array($this->cursor);
	return var_dump($results);
	}
	
	public function get_find_cursor() 
	{
	$this->cursor = $this->collection->find();
	}
	
	public function get_collection() 
	{ 
		return $this->collection();   
	}

}
?>



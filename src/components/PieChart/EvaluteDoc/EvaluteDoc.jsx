import "./EvaluteDoc.css";

const EvaluteDoc = (prpos) => {
  return (
    <div className="EvaluteDoc">
      <span className="Evalute_text">Evaluvate Document Views</span>
      <div className="Evalute_input">
        <div className="Evalute_name">
          <span>Document Name</span>
          <input type="text" placeholder="" id="document_name"></input>
        </div>
        <div className="Evalute_region">
          <span>Region Type</span>
          <div className="Evalute_regionDiv">
            <select name="region_type" id="region_type">
              <option value="city">City</option>
              <option value="country">Country</option>
              
            </select>
          </div>
        </div>
  
        <button>Get Details</button>
        
       
      </div>
    </div>
  );
};

export default EvaluteDoc;

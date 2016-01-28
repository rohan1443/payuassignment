var React = require('react');
var mainstore = require('../stores/mainstore');
var CommonActions = require('../actions/CommonActions');
function getStateData(){
  return {
           flag : mainstore.getFlag(),
           getData : mainstore.getData()
    };
}

var EditPage = React.createClass({
	d : getStateData(),
	getInitialState: function(){
	    return getStateData();
	  },
	  componentWillMount: function(){
	    mainstore.addChangeListener(this._onChange);
	  },
	  componentWillUnmount: function(){
	    mainstore.removeChangeListener(this._onChange);
	  },
	  _onChange: function(){ 
	    this.setState(getStateData());
	  },
	  save: function(){
			
			var data = {
				'fullname' : this.refs.fullname.value,
				'email' : this.refs.email.value,
				'headline' : this.refs.headline.value,
				'skills' : this.refs.skills.value,
				'blog' : this.refs.blog.value
			}
			CommonActions.saveData(data);	

		},
		a:function(e){
			var data = {
				'fullname' : this.refs.fullname.value,
				'email' : this.refs.email.value,
				'headline' : document.getElementById("ss").value,
				'skills' : this.refs.skills.value,
				'blog' : this.refs.blog.value
			}
			CommonActions.updateData(data);
		},
	render:function(){
		var self = this;
		console.log(this.state.getData);
		var buttonComp = this.state.flag ? "SAVE" : "EDIT";
		console.log("ash");
		//console.log(d);
		if(this.state.flag==true){
		return(
			<div className="formBody">
				<div className="formContainer col-md-12">
					<div className="row">
						<div className="col-md-12 header">
							<div className="col-md-5 col-md-offset-3">
								<input type="text" className="fullName" ref="fullname" placeholder="YOUR FULL NAME" />
								<input type="email" className="emailId" ref="email" placeholder="you@domain.com" />
							</div>
							<div className="col-md-4">
								<input type="button" value={buttonComp} onClick={this.save}/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="bodyContent">
							<div className="col-md-12">
								<div className="bodyHeaders">
									Headline
								</div>
							</div>
							<div className="col-md-12">
								<div className="contentArea">
									<input  ref="headline" id="ss" className="headlineArea textEntry" rows="4" cols="" placeholder="Type your headline" value={this.state.getData["headline"]}  onChange={this.a} />
								</div>
							</div>
							<div className="col-md-12">
								<div className="bodyHeaders">
									Skills
								</div>
							</div>
							<div className="col-md-12">
								<div className="contentArea">
									<textArea ref="skills" className="skillsArea textEntry" rows="1" cols="" placeholder="Type your skills">
									
									</textArea>
								</div>
							</div>
							<div className="col-md-12">
								<div className="bodyHeaders">
									Blogg URL
								</div>
							</div>
							<div className="col-md-12">
								<div className="contentArea">
									<input type="email" ref="blog" className="urlId textEntry" placeholder="type your website/blog url"/>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="footer">
							<div className="col-md-12">
								<div className="col-md-3">
									ABCD
								</div>
								<div className="col-md-offset-6 col-md-3">
									ABCD
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}else{
			return(
				
			<div className="formBody">
				<div className="formContainer col-md-12">
					<div className="row">
						<div className="col-md-12 header">
							<div className="col-md-5 col-md-offset-3">
								<input type="text" className="fullName" ref="fullname" placeholder="YOUR FULL NAME" />
								<input type="email" className="emailId" ref="email" placeholder="you@domain.com" />
							</div>
							<div className="col-md-4">
								<input type="button" value={buttonComp} onClick={this.save}/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="bodyContent">
							<div className="col-md-12">
								<div className="bodyHeaders">
									Headline
								</div>
							</div>
							<div className="col-md-12">
								<div className="contentArea">
									<p ref="headline">
										{this.state.getData["headline"]}
									</p>
								</div>
							</div>
							<div className="col-md-12">
								<div className="bodyHeaders">
									Skills
								</div>
							</div>
							<div className="col-md-12">
								<div className="contentArea">
									<textArea ref="skills" className="skillsArea textEntry" rows="1" cols="" placeholder="Type your skills">
									
									</textArea>
								</div>
							</div>
							<div className="col-md-12">
								<div className="bodyHeaders">
									Blogg URL
								</div>
							</div>
							<div className="col-md-12">
								<div className="contentArea">
									<input type="email" ref="blog" className="urlId textEntry" placeholder="type your website/blog url"/>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="footer">
							<div className="col-md-12">
								<div className="col-md-3">
									ABCD
								</div>
								<div className="col-md-offset-6 col-md-3">
									ABCD
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
			}
	

}
});

module.exports = EditPage;
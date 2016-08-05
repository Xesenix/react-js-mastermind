var ReactDOM = require('react-dom');
var React = require('react');
var _ = require('lodash');
var MastermindModule = require('../modules/mastermind.js');

var mastermindEngine = new MastermindModule.Engine();
var target = [0, 1, 0, 2];
mastermindEngine.setTarget(target);

var Mastermind = React.createClass({
	id: 0,
	getInitialState: function() {
		this.id ++;
		
		return {
			resolved: false,
			lastRowValues: null,
			engine: mastermindEngine,
			unlockedRows: 1
		};
	},
	resetGame: function() {
		var initialState = this.getInitialState();
		var target = initialState.engine.generate(this.props.slots, this.props.items.length);
		
		this.setState(initialState);
	},
	submitRow: function(values, result) {
		if (result.miss === 0 && result.wrong === 0)
		{
			this.setState({ resolved: true });
		}
		else
		{
			this.setState({ unlockedRows: this.state.unlockedRows + 1, lastRowValues: values });
		}
	},
	render: function() {
		var rows = _.times(this.state.unlockedRows, _.bind(function(key) {
			return (
				<Mastermind.Row 
					key={this.id + '_' + key}
					slots={this.props.slots}
					items={this.props.items}
					values={this.state.lastRowValues}
					onValueSubmit={this.submitRow}
				/>
			);
		}, this));
		
		if (this.state.resolved) {
			rows[rows.length] = (
				<div>WIN</div>
			)
		}
		
		return (
			<div key={this.id}>
				<h1>Mastermind</h1>
				{rows}
				{this.props.children}
				<button onClick={this.resetGame}>Reset</button>
			</div>
		);
	}
});

Mastermind.Row = React.createClass({
	getInitialState: function() {
		return {
			commited: false,
			result: null,
			values: this.props.values || _.times(this.props.slots, _.constant(0))
		};
	},
	handleCommitRow: function() {
		var result = mastermindEngine.evaluate(this.state.values);
		
		this.setState({ commited: true, result: result });
		
		this.props.onValueSubmit(this.state.values, result);
	},
	handleSlotValueChange: function(slotId, value) {
		if (!this.state.commited)
		{
			var values = this.state.values;
			values[slotId] = value;
			
			this.setState({ values: values });
		}
	},
	render: function() {
		console.log('Mastermind.Row.render', this.props, this.state);
		var slots = _.times(this.props.slots, _.bind(function(key) {
			return (
				<Mastermind.Slot 
					key={key}
					id={key}
					disabled={this.state.commited}
					value={this.state.values[key]}
					items={this.props.items}
					onValueChange={this.handleSlotValueChange}
				/>
			);
		}, this));
		
		var result = null;
		
		if (this.state.commited)
		{
			result = (<div>hit: {this.state.result.hits} miss: {this.state.result.miss}</div>);
		}
		else
		{
			result = (<button onClick={this.handleCommitRow}>Submit</button>);
		}
		
		return (<div>{slots} {result}</div>);
	}
});

Mastermind.Slot = React.createClass({
	getInitialState: function() {
		return {
			value: this.props.value
		};
	},
	handleClick: function() {
		if (!this.props.disabled)
		{
			var newValue = (this.state.value + 1) % this.props.items.length;
			this.setState({ value: newValue});
			this.props.onValueChange(this.props.id, newValue);
		}
	},
	render: function() {
		var current = this.props.items[this.state.value];
		
		return (
			<button
				onClick={this.handleClick}
				style={{backgroundColor: current.color}}
			>
				{current.label}
			</button>
		);
	}
});

ReactDOM.render(
	<Mastermind slots={target.length} items={[{label: 'A', color: '#f00'}, {label: 'B', color: '#0f0'}, {label: 'C', color: '#00f'}]}/>,
	document.getElementById('mastermind')
);
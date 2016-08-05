var _ = require('lodash');

function Engine() {
	var _target = [];
	
	function setTarget(target) {
		_target = target;
	}
	
	function evaluate(tested) {
		var i;
		var result = {
			hits: 0,
			miss: 0,
			wrong: 0
		};
		
		var remebered = {};
		
		for (i = 0; i < _target.length; i++)
		{
			if (_target[i] === tested[i])
			{
				result.hits++;
			}
			else
			{
				if (typeof(remebered[tested[i]]) === 'undefined')
				{
					remebered[tested[i]] = 0;
				}
				
				remebered[tested[i]] ++;
			}
		}
		
		for (i = 0; i < _target.length; i++)
		{
			if (_target[i] !== tested[i] && remebered[_target[i]] > 0)
			{
				result.miss++;
				remebered[_target[i]] --;
			}
		}
		
		result.wrong = _target.length - result.hits - result.miss;
		
		return result;
	}
	
	function generate(length, values) {
		return _target = _.times(length, _.bind(_.random, this, 0, values - 1, false));
	}
	
	return {
		setTarget: setTarget,
		evaluate: evaluate,
		generate: generate
	};
}

exports.Engine = Engine;
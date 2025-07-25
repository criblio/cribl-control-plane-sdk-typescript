// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type RouteConf struct {
	Clones                 []RouteCloneConf `json:"clones,omitempty"`
	Context                *string          `json:"context,omitempty"`
	Description            *string          `json:"description,omitempty"`
	Disabled               *bool            `json:"disabled,omitempty"`
	EnableOutputExpression *bool            `json:"enableOutputExpression,omitempty"`
	Filter                 *string          `json:"filter,omitempty"`
	Final                  bool             `json:"final"`
	GroupID                *string          `json:"groupId,omitempty"`
	ID                     string           `json:"id"`
	Name                   string           `json:"name"`
	Output                 *string          `json:"output,omitempty"`
	OutputExpression       *string          `json:"outputExpression,omitempty"`
	Pipeline               string           `json:"pipeline"`
}

func (o *RouteConf) GetClones() []RouteCloneConf {
	if o == nil {
		return nil
	}
	return o.Clones
}

func (o *RouteConf) GetContext() *string {
	if o == nil {
		return nil
	}
	return o.Context
}

func (o *RouteConf) GetDescription() *string {
	if o == nil {
		return nil
	}
	return o.Description
}

func (o *RouteConf) GetDisabled() *bool {
	if o == nil {
		return nil
	}
	return o.Disabled
}

func (o *RouteConf) GetEnableOutputExpression() *bool {
	if o == nil {
		return nil
	}
	return o.EnableOutputExpression
}

func (o *RouteConf) GetFilter() *string {
	if o == nil {
		return nil
	}
	return o.Filter
}

func (o *RouteConf) GetFinal() bool {
	if o == nil {
		return false
	}
	return o.Final
}

func (o *RouteConf) GetGroupID() *string {
	if o == nil {
		return nil
	}
	return o.GroupID
}

func (o *RouteConf) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *RouteConf) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *RouteConf) GetOutput() *string {
	if o == nil {
		return nil
	}
	return o.Output
}

func (o *RouteConf) GetOutputExpression() *string {
	if o == nil {
		return nil
	}
	return o.OutputExpression
}

func (o *RouteConf) GetPipeline() string {
	if o == nil {
		return ""
	}
	return o.Pipeline
}

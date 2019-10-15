var hasCycle = function(head){
	if(!head||!head.next)
	{
		return  false 
	}
	var i=j=head;
	while(j.next&&j.next.next)
	{
		i = i.next;
		j = j.next.next;
		if(i.val === j.val)
		{
			return true;
		}
	}
	return false;
}

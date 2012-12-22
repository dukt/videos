<?php
if($any_account_exists)
{
	?>
	<div class="dukt-videos-field">
		<?php
		echo $hidden_input;
		?>
		<div class="preview"></div>

		<p class="controls">
			<a class="add"><span></span><?php echo $this->lang_line('add_video'); ?></a>
			<a class="change"><span></span><?php echo $this->lang_line('change_video'); ?></a>
			<a class="remove"><span></span><?php echo $this->lang_line('remove_video'); ?></a>
		</p>
	</div>
	<?php
}
else
{
	echo '<p>'.$this->lang_line('addon_disabled').'</p>';
}
?>

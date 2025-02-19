<?php

/**
 * Title: Blog posts one column.
 * Slug: flexit/query-default
 * Categories: flexit-query
 */

?>
<!-- wp:query {"queryId":0,"query":{"perPage":"5","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"displayLayout":{"type":"list"},"layout":{"inherit":true}} -->
<div class="wp-block-query">
	<!-- wp:query-title {"type":"archive","fontSize":"large"} /-->

	<!-- wp:term-description /-->

	<!-- wp:post-template -->
	<!-- wp:post-title {"isLink":true} /-->

	<!-- wp:post-featured-image /-->

	<!-- wp:post-excerpt /-->

	<!-- wp:group {"style":{"spacing":{"blockGap":"10px","margin":{"top":"30px"}}},"className":"post-meta","layout":{"type":"flex"},"fontSize":"small"} -->
	<div class="wp-block-group post-meta has-small-font-size" style="margin-top:30px">
		<!-- wp:post-date /-->
		<!-- wp:post-author-name {"className":"is-style-post-author-icon"} /-->

		<!-- wp:post-date {"className":"is-style-post-date-icon"} /-->

		<!-- wp:post-terms {"term":"category","className":"is-style-post-category-icon"} /-->

		<!-- wp:post-terms {"term":"post_tag","className":"is-style-post-tag-icon"} /-->
	</div>
	<!-- /wp:group -->

	<!-- wp:spacer {"height":"30px"} -->
	<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->
	<!-- /wp:post-template -->

	<!-- wp:query-pagination -->
	<!-- wp:query-pagination-previous /-->

	<!-- wp:query-pagination-next /-->
	<!-- /wp:query-pagination -->
</div>
<!-- /wp:query -->
